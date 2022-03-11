
export const setEntries = (state, entries) => {
  // crea un nuevo arreglo com los valores anteriores + nuevos valores
  state.entries = [ ...state.entries, ...entries ]
  state.isLoading = false

}

export const updateEntry = (state, entry) => {
  // tiener ids del store, onde dame el índice del objeto en este arreglo
  const idx = state.entries.map(e => e.id).indexOf(entry.id)
  state.entries[idx] = entry
}

export const createEntry = (state, entry) => {
  state.entries = [ entry, ...state.entries ]
}

export const destroyEntry = (state, entryID ) => {
  state.entries = state.entries.filter(entry => entry.id !== entryID)
}
