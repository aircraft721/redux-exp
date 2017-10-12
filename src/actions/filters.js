//SET TEXT FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    filter: {text}
})

//SORT BY DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});

//SORT BY AMOUNT
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

//START DATE
export const setStartDate = (startDate) => ({
    type: 'START_DATE',
    startDate
})

export const setEndDate = (endDate) => ({
    type: 'END_DATE',
    endDate
})
