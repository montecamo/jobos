export function queryChange(query) {
  return {
    type: 'QUERY_CHANGE',
    payload: query 
  }
}

export function scrollSearch(type) {
  return {
    type: 'SCROLL_SEARCH',
    payload: type
  }
}

export function setVacanciesFound(number) {
  return {
    type: 'SET_VACANCIES_FOUND',
    payload: number
  }
}
