export interface User {
	nom: string,
	prenom: string,
	email: string,
	active: string,
	id: number,
	permissions: string[],
	role: object,
	role_id: number,
	eglise_id: number,
	eglise: object,
}
