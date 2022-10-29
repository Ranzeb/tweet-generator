import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const generateThread = async (req, res) => {
    try {

    } catch (error) {

    }
};

export const generateTweet = async (req, res) => {


    const prompt = "Generate a tweet on the subject: " + req.body.content;

    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: prompt,
            temperature: 0.5,
            max_tokens: 1000,
            top_p: 1,
            frequency_penalty: 1,
            presence_penalty: 1,
        });

        res.status(200).json({ result: completion.data.choices[0].text });

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const generateTags = async (req, res) => {

    const prompt = "Generate a tweet hashtags on the subject: " + req.body.content;

    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: prompt,
            temperature: 0.5,
            max_tokens: 1000,
            top_p: 1,
            frequency_penalty: 1,
            presence_penalty: 1,
        });

        res.status(200).json({ result: completion.data.choices[0].text });

    } catch (error) {
        res.status(404).json({ message: error.message });
    }

};