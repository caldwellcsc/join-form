import Head from "next/head";
import React from "react";
import Form from "../Components/Form";

const Home: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Join CaldwellCSC</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta charSet="UTF-8" />

                <meta
                    name="description"
                    content="We are the Caldwell University's tech related student
                    organization. We hope to create an engaging and positive space for
                    University's tech enthusiasts and position Caldwell University
                    within a global community of student leaders in tech. Join Today."
                />
                <meta
                    property="og:title"
                    content="Join Caldwell CS Club Today."
                />
                <meta
                    property="og:description"
                    content="We are the Caldwell University's tech related student
                    organization. We hope to create an engaging and positive space for
                    University's tech enthusiasts and position Caldwell University
                    within a global community of student leaders in tech. Join Today."
                />
                <meta
                    property="og:image"
                    content="https://hoopdirt.com/wp-content/uploads/2022/10/Untitled-design-2022-09-13T112931.122.jpg"
                />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />

                <meta name="robots" content="index, follow" />

                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="bg-gradient-to-r from-rose-100 to-teal-100 min-h-screen">
                <Form />
            </div>
        </div>
    );
};

export default Home;
