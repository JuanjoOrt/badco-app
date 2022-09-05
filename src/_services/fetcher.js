
export default async function fetcher ({ method, url, body, auth }) {
  const authorization = auth && `Bearer ${auth}`
  const response = await fetch(url, {
    headers: {
      'Content-type': 'application/json',
      Authorization: authorization
    },
    method,
    body: JSON.stringify(body)
  })
  if (!response.ok) throw new Error(response.statusText)
  return response.json()
}
