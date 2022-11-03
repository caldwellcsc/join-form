import Head from "next/head";
import React from "react";
import Form from "../Components/Form";

const Home: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Join CaldwellCSC</title>
                <meta
                    name="description"
                    content="Invitation to join Caldwell CSC"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="bg-gradient-to-r from-rose-100 to-teal-100 min-h-screen">
                <Form />
            </div>
        </div>
    );
};

export default Home;
