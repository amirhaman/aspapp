import { NextPageContext } from 'next';

export default function Error({ statusCode }: { statusCode: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{statusCode ? `An error ${statusCode} occurred on server` : "An error occurred on client"}</p>
    </main>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
