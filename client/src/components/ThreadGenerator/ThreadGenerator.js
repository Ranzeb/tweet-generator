import React from 'react';
import { useState } from "react";
import styles from "./index.module.css";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import * as api from '../../api/generate';
import { Typography } from '@mui/material';

function TweetGenerator() {
    const [inputData, setInputData] = useState("");

    const clearText = () => {
        setInputData("");
    }

    const generateContent = async () => {
        const response = await api.generateTweet({ content: inputData })

        console.log(response.data.result);
        const data = await response.data.result;
        setInputData(inputData + "\n" + data);
    }
    return (
        <div>
            <main className={styles.main}>
                <Typography
                    variant="h5"
                    mb={5}
                >
                    Coming Soon...
                </Typography>


            </main>
        </div>
    );
}

export default TweetGenerator
