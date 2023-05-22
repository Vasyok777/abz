import axios from 'axios'

export const UsersService = {
	async getUsers(numberPage = 1) {
		const { data } = await axios.get(
			`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${numberPage}&count=6`
		)
		return data
	},
	async getPositionsId() {
		const { data } = await axios.get(
			'https://frontend-test-assignment-api.abz.agency/api/v1/positions'
		)
		return data
	},
	async getTokenUser() {
		const { data } = await axios.get(
			'https://frontend-test-assignment-api.abz.agency/api/v1/token'
		)
		return data.token
	},
	async createNewUser(newData) {
		try {
			const token = await this.getTokenUser()
			const { data } = await axios.post(
				'https://frontend-test-assignment-api.abz.agency/api/v1/users',
				newData,
				{
					headers: {
						token: token,
					},
				}
			)
			return data
		} catch (error) {
			throw new Error(error.response.data.message) // Кидаємо помилку у випадку статусу помилки
		}
	},
}
