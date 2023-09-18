import { trpc } from './trpc'

export default async function Home() {
  const { hello } = await trpc.hello.query({ name: 'alec' })

  return (
    <div>
      {hello}
    </div>
  )
}
