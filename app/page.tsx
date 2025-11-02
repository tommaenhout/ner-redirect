import Redirect from "@/components/Redirect";

export default function Home() {
  return (
      <main className="">
        <h1>Ner</h1>
        <h2>Gracias por tu compra!!</h2>
        <p>Te redireccionaremos a nuestra página de instagram</p>
        <Redirect/>
      </main>
  );
}
