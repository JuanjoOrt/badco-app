
export default async function fetcher ({ method, url, body, auth }) {
  const authorization = auth && `Bearer ${auth}`
  const value = { data: null, error: null }
  try {
    const response = fetch(url, {
      headers: {
        'Content-type': 'application/json',
        Authorization: authorization
      },
      method,
      body: JSON.stringify(body)
    })
    console.log(response)
    if (!response.ok) throw new Error(response.statusText)
    value.data = await response.json()
  } catch (error) {
    value.error = error
  }
  return { ...value }
}
