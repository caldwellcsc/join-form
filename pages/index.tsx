import Head from "next/head";
import Form from "../Components/Form";

export default function Home() {
  // const [students, studentLoading, studentErr] = useCollection(
  //   collection(db, "students")
  // );

  // if (!studentLoading && students) {
  //   students.docs.forEach(student => {
  //     console.log(student.data());
  //   });
  // }

  return (
    <div>
      <Head>
        <title>Join CaldwellCSC</title>
        <meta name="description" content="Invitation to join Caldwell CSC" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="bg-gradient-to-r from-rose-100 to-teal-100 min-h-screen">
        <Form />
      </div>
    </div>
  );
}
