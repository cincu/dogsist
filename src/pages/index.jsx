import Textroll from "../../Components/Textroll/Textroll";

export default function HomePage({ name }) {
  return (
    <div className="main">
      <h1>the story of {name}*</h1>
      <Textroll />
      <p style={{ width: "15rem" }}>
        I dedicate this project to all the dog friends that kept me company in
        dark streets at strange hours of istanbul, I wish everyone could feel
        safe as I do when you are around and see that cities that grow endlessly
        cause more harm to our well-beings than your mere existence. This
        project aims to recognise the history, raise awareness for current
        issues, guide light to other sociological parallelities and suggest
        solutions for dogs and humans. not all parties have to love each other
        but we can at least hope to find ways to co-exist. Annihilation is not
        the answer.
      </p>
      <p style={{ position: "fixed", bottom: "50px" }}>
        * {name} is an acronym for sokak-köpeği in Turkish: street-dog
      </p>
    </div>
  );
}
