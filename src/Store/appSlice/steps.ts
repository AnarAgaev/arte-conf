import { T_Steps } from "./types";

const steps: T_Steps = [
	{
		id: 0,
		name: 'шаг 1',
		status: 'active',
		substeps: [
			{
				id: 0,
				name: 'тип потолка',
				status: 'prev'
			},
			{
				id: 1,
				name: 'тип монтажа',
				status: 'active'
			},
			{
				id: 2,
				name: 'форма конфигурации',
				status: 'next'
			}
		]
	},
	{
		id: 1,
		name: 'шаг 2',
		status: 'next',
		substeps: [
			{
				id: 0,
				name: 'тип трека',
				status: 'active'
			},
			{
				id: 1,
				name: 'цвет',
				status: 'next'
			},
			{
				id: 2,
				name: 'коллекция',
				status: 'next'
			}
		]
	},
	{
		id: 2,
		name: 'шаг 3',
		status: 'next',
		substeps: [
			{
				id: 0,
				name: 'подбор светильников в трек',
				status: 'active'
			},
			{
				id: 1,
				name: 'Дополнительное освещение',
				status: 'next'
			}
		]
	},
	{
		id: 3,
		name: 'шаг 4',
		status: 'next',
		substeps: [
			{
				id: 0,
				name: 'блок питания',
				status: 'active'
			}
		]
	},
	{
		id: 4,
		name: 'итого',
		status: 'next',
		substeps: [
			{
				id: 0,
				name: 'о клиенте',
				status: 'active'
			},
			{
				id: 1,
				name: 'ваша конфигурация',
				status: 'next'
			}
		]
	}
]

export default steps