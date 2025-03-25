import Link from 'next/link';
export default function Page() {
  return(
    <main>
      <h1>CPRG 306:Web Development 2 - Assignments</h1>
      
      <section>
      <Link href='/week-2'>week-2</Link>
      </section>
      <section>
      <Link href='/week-3'>week-3</Link>
      </section>
      <section>
      <Link href='/week-4'>week-4</Link>
      </section>
      
      <section>
      <Link href='/week-5'>week-5</Link>
      </section>

      <section>
      <Link href='/week-6'>week-6</Link>
      </section>

      
    </main>
  )
};