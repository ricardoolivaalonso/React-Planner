import { v4 as uuidv4 } from 'uuid';

const initialState = {
    days: [
        {
            id: 1,
            title: 'monday',
            active: true,
            tasks: [
                {
                    id: uuidv4(),
                    title: 'Learn how to code',
                    hour: 18,
                    editable: false
                },
                {
                    id: uuidv4(),
                    title: 'Eat pizza',
                    hour: 10,
                    editable: false
                }
            ]
        },
        {
            id: 2,
            title: 'tuesday',
            active: false,
            tasks: []
        },
        {
            id: 3,
            title: 'wednesday',
            active: false,
            tasks: []

        },
        {
            id: 4,
            title: 'thursday',
            active: false,
            tasks: []

        },
        {
            id: 5,
            title: 'friday',
            active: false,
            tasks: []

        },
        {
            id: 6,
            title: 'saturday',
            active: false,
            tasks: []

        },
        {
            id: 7,
            title: 'sunday',
            active: false,
            tasks: []

        }
    ],
}

export { initialState }