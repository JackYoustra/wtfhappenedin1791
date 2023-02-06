import { fullQuote } from "./manualConstants";

export default function Head() {
  return (
    <>
      <title>WTF Happened in 1791?</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={fullQuote} />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
