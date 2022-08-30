interface IWorkplace {
    no: number
    place: string;
    type: string;
    start: string;
    end: string;
    enter: number;
    months: number;
}

export const dataset : IWorkplace[] = [
    {
        no: 1,
        place: 'Red Graphic Interactive Agency',
        type: 'agency',
        start: '2006',
        end: '2012',
        enter: 0,
        months: 74,

    },
    {
        no: 2,
        place: 'Borovoy studio',
        type: 'studio',
        start: '2012',
        end: '2013',
        enter: 74,
        months:8,
    },
    {
        no: 3,
        place: 'StartupLabs',
        type: 'product',
        start: '2013',
        end: '2013',
        enter: 82,
        months: 10,
    },
    {
        no: 4,
        place: 'Digitalizm',
        type: 'agency',
        start: '2013',
        end: '2015',
        enter: 92,
        months: 17,
    },
    {
        no: 5,
        place: 'Captiv8',
        type: 'product',
        start: '2015',
        end: '2017',
        enter: 109,
        months: 27,
    },
    {
        no: 6,
        place: 'Studio Right',
        type: 'studio',
        start: '2017',
        end: '2019',
        enter: 136,
        months: 19,
    },
    {
        no: 7,
        place: 'iFuture',
        type: 'product',
        start: '2019',
        end: 'Now',
        enter: 155,
        months: 41
    }
]