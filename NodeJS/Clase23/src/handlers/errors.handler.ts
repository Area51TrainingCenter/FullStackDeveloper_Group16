export interface IError extends Error {
	status?: number
}

const errorsHandler = {
	catchAsync(ftn: (req, res, next) => Promise<any>) {
		return (req, res, next) => {
			return ftn(req, res, next).catch(error => {
				res.status(500).send(error.message)
			})
		}
	}
}

export { errorsHandler }