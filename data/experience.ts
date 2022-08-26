interface IWorkplace {
    no: number
    place: string;
    type: string;
    start: number;
    end: number;
    months: number
}

export const dataset : IWorkplace[] = [
    {
        no: 1,
        place: 'Red Graphic Interactive Agency',
        type: 'agency',
        start: 2006,
        end: 2012,
        months: 74

    },
    {
        no: 2,
        place: 'Borovoy studio',
        type: 'studio',
        start: 2012,
        end: 2013,
        months:8,
    },
    {
        no: 3,
        place: 'StartupLabs',
        type: 'product',
        start: 2013,
        end: 2013,
        months: 10,
    },
    {
        no: 4,
        place: 'Digitalizm',
        type: 'agency',
        start: 2013,
        end: 2015,
        months: 17,
    },
    {
        no: 5,
        place: 'Captiv8',
        type: 'product',
        start: 2015,
        end: 2017,
        months: 27,
    },
    {
        no: 6,
        place: 'Studio Right',
        type: 'studio',
        start: 2017,
        end: 2019,
        months: 19,
    },
    {
        no: 7,
        place: 'iFuture',
        type: 'product',
        start: 2019,
        end: 2022,
        months: 42
    }
]