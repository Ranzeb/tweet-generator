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
                    Generate your Tweet
                </Typography>

                <Stack spacing={2} direction="column">
                    <TextareaAutosize
                        color="primary"
                        className={styles.textarea}
                        maxRows={40}
                        minRows={20}
                        style={{ width: 600, resize: "none", borderRadius: "2px" }}
                        placeholder="Insert your subject here..."
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)} />
                    <Stack
                        mt={200}
                        spacing={2}
                        direction="row">
                        <Button
                            style={{ width: 50, height: 30 }}
                            variant="outlined"
                            color="error"
                            onClick={clearText}>
                            <p style={{ marginTop: 18, fontSize: 9 }}>Clear</p>
                        </Button>
                        <Button
                            style={{ width: 50, height: 30 }}
                            variant="contained"
                            onClick={generateContent}>
                            <p style={{ marginTop: 18, fontSize: 9 }}>Generate</p>
                        </Button>
                    </Stack>
                </Stack>
            </main>
        </div>
    );
}

export default TweetGenerator
