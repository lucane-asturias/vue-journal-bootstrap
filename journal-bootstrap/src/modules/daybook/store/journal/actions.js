import journalApi from '@/api/journal_api.js'

// petición GET (READ; which means it only fetches the information and that's it)
export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get('/entries.json')

  if (!data) {
    commit('setEntries', [])
    return
  }

  const entries = []

  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id]
    })
  }

  commit('setEntries', entries)
}

// petición PUT (CREATE)
export const updateEntry = async ({ commit }, entry) => {

  const { date, picture, text } = entry
  const dataToSave = { date, picture, text }

  await journalApi.put(`/entries/${entry.id}.json`, dataToSave)

  commit('updateEntry', { ...entry})
}

// petición POST (UPDATE)
export const createEntry = async ({ commit }, entry) => {
  const { date, picture, text } = entry
  const dataToSave = { date, picture, text }

  // data = { "name": "-MxlYBvjVoYTMaMJG7mt" }
  const { data } = await journalApi.post(`/entries.json`, dataToSave)

  dataToSave.id = data.name // añadir el id

  commit('createEntry', dataToSave)

  return data.name
}

export const destroyEntry = async ({ commit }, entryID) => {

  await journalApi.delete(`/entries/${entryID}.json`)

  commit('destroyEntry', entryID)
}