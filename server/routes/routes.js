import express from "express";
import { generateTweet, generateThread, generateTags } from "../controllers/openai.js";
const router = express.Router();

router.post("/generate-tweet", generateTweet);
router.post("/generate-tags", generateTags);
router.post("/generate-thread", generateThread);

export default router;


