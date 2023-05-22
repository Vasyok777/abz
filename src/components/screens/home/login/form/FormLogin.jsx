import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { UsersService } from 'services/user.service'
import Button from 'components/UI/button'
import Input from 'components/UI/input'
import styles from './Form.module.scss'

const FormLogin = ({
	setIsFormSubmitted,
	setIsLoadingSubmit,
	isLoadingSubmit,
}) => {
	const [uploadedFileName, setUploadedFileName] = useState('')
	const [errorMessage, setErrorMessage] = useState('')
	const {
		register,
		reset,
		handleSubmit,
		trigger,
		formState: { isDirty, errors, isValid },
	} = useForm({
		mode: 'onChange',
	})
	console.log(isDirty, isValid)
	const { data, isLoading } = useQuery(['position'], () =>
		UsersService.getPositionsId()
	)
	const handleFileChange = e => {
		const selectedFile = e.target.files[0]
		setUploadedFileName(selectedFile ? selectedFile.name : '')
	}
	const queryClient = useQueryClient()
	const createUserMutation = useMutation(data =>
		UsersService.createNewUser(data)
	)
	const createUser = async data => {
		console.log(data)
		const phone = data.phone
			.replace('(', '')
			.replace(')', '')
			.replaceAll('-', '')
			.replaceAll(' ', '')
		try {
			setIsLoadingSubmit(true)
			const formData = new FormData()
			formData.append('name', data.name)
			formData.append('email', data.email)
			formData.append('phone', phone)
			formData.append('position_id', data.position_id)
			formData.append('photo', data.photo[0])

			await createUserMutation.mutateAsync(formData, {
				onSuccess: () => {
					reset()
					queryClient.invalidateQueries('users')
					setIsFormSubmitted(true)
					console.log('Registration successful')
				},
			})
			setIsLoadingSubmit(false)
		} catch (error) {
			setErrorMessage(error.message)
			setIsLoadingSubmit(false)
		} finally {
			setIsLoadingSubmit(false)
		}
	}
	return (
		<>
			<form
				onSubmit={handleSubmit(createUser)}
				className={`${styles.form} ${isLoadingSubmit && styles.form__events}`}
				method='post'
				action='/'
				encType='multipart/form-data'
			>
				<Input
					className={styles.form__input}
					type='text'
					label='Your name'
					errors={errors.name}
					{...register('name', {
						required: 'Name is required',
						pattern: {
							value: /[A-Za-zА-Яа-яЁёЇїІіЄєҐґ]{2,60}/,
							message: 'Name must be 2 charset',
						},
					})}
				/>
				<Input
					className={styles.form__input}
					label='Email'
					type='email'
					errors={errors.email}
					{...register('email', {
						required: 'Email is required',
						pattern: {
							value:
								/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
							message: 'User email, must be a valid email according to RFC2822',
						},
					})}
				/>
				<Input
					className={styles.form__input}
					label='Phone'
					type='text'
					helperText='+38 (XXX) XXX - XX - XX'
					errors={errors.phone}
					{...register('phone', {
						required: 'Phone is required',
					})}
				/>
				<fieldset>
					<legend>Select your position</legend>
					{!isLoading &&
						data.positions.map(item => (
							<label className={styles.label} key={item.id}>
								<input
									type='radio'
									className={styles.form__radio}
									value={item.id}
									required
									{...register('position_id', {
										required: 'Position is required',
									})}
								/>
								<span className={styles['form__radio-custom']}></span>
								{item.name}
							</label>
						))}
				</fieldset>
				<label className={styles['form__file-label']}>
					<input
						className={styles['form__file-input']}
						type='file'
						{...register('photo', {
							required: 'File is required',
						})}
						onChange={e => {
							handleFileChange(e)
							trigger('photo')
						}}
						accept='image/jpeg, image/jpg, image/png'
					/>
					<span
						className={`${styles['form__file-custom']} ${
							errorMessage && styles.errors
						}`}
					>
						Upload
					</span>

					{uploadedFileName ? (
						<span
							className={`${styles['form__file-text']} ${
								errorMessage && styles.errors
							}`}
						>
							{uploadedFileName}
						</span>
					) : (
						<span className={styles['form__file-text']}>Upload your photo</span>
					)}
				</label>
				{errorMessage && (
					<span className={styles.error}>
						Minimum size of photo 70x70px. The photo format must be jpeg/jpg
						type. The photo size must not be greater than 5 Mb.
					</span>
				)}
				<Button
					type='submit'
					className={`${styles['form__button']}`}
					disabled={!isDirty || !isValid || !uploadedFileName}
				>
					Sign up
				</Button>
			</form>
		</>
	)
}

export default FormLogin
