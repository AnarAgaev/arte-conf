import { T_Steps } from "./types";

const steps: T_Steps = [
	{
		id: 0,
		name: 'step1',
		description: 'шаг 1',
		status: 'active',
		substeps: [
			{
				id: 0,
				name: 'ceilingType',
				description: 'тип потолка',
				status: 'active'
			},
			{
				id: 1,
				name: 'mountingType',
				description: 'тип монтажа',
				status: 'next'
			},
			{
				id: 2,
				name: 'constructionForm',
				description: 'форма конфигурации',
				status: 'next'
			}
		]
	},
	{
		id: 1,
		name: 'step2',
		description: 'шаг 2',
		status: 'next',
		substeps: [
			{
				id: 0,
				name: 'trackType',
				description: 'тип трека',
				status: 'active'
			},
			{
				id: 1,
				name: 'trackColor',
				description: 'цвет',
				status: 'next'
			},
			{
				id: 2,
				name: 'trackCollection',
				description: 'коллекция',
				status: 'next'
			}
		]
	},
	{
		id: 2,
		name: 'step3',
		description: 'шаг 3',
		status: 'next',
		substeps: [
			{
				id: 0,
				name: 'lampsSelection',
				description: 'подбор светильников в трек',
				status: 'active'
			},
			{
				id: 1,
				name: 'additionalLighting',
				description: 'дополнительное освещение',
				status: 'next'
			}
		]
	},
	{
		id: 3,
		name: 'step4',
		description: 'шаг 4',
		status: 'next',
		substeps: [
			{
				id: 0,
				name: 'powerSupply',
				description: 'блок питания',
				status: 'active'
			}
		]
	},
	{
		id: 4,
		name: 'stepTotal',
		description: 'итого',
		status: 'next',
		substeps: [
			{
				id: 0,
				name: 'aboutClient',
				description: 'о клиенте',
				status: 'active'
			},
			{
				id: 1,
				name: 'totalConfiguration',
				description: 'ваша конфигурация',
				status: 'next'
			}
		]
	}
]

export default steps