import { T_Steps } from "./types";

const steps: T_Steps = [
    {
        name: '1',
        status: 'active',
        substeps: [
            {
                name: 'тип потолка',
                status: 'active'
            },
            {
                name: 'тип монтажа',
                status: 'next'
            },
            {
                name: 'форма конфигурации',
                status: 'next'
            }
        ]
    },
    {
        name: '2',
        status: 'next',
        substeps: [
            {
                name: 'тип трека',
                status: 'next'
            },
            {
                name: 'цвет',
                status: 'next'
            },
            {
                name: 'коллекция',
                status: 'next'
            }
        ]
    },
    {
        name: '3',
        status: 'next',
        substeps: [
            {
                name: 'подбор светильников в трек',
                status: 'next'
            },
            {
                name: 'Дополнительное освещение',
                status: 'next'
            }
        ]
    },
    {
        name: '4',
        status: 'next',
        substeps: [
            {
                name: 'блок питания',
                status: 'next'
            }
        ]
    },
    {
        name: 'total',
        status: 'next',
        substeps: [
            {
                name: 'о клиенте',
                status: 'next'
            },
            {
                name: 'ваша конфигурация',
                status: 'next'
            }
        ]
    }
]

export default steps