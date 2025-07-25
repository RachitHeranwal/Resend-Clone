document.addEventListener("DOMContentLoaded", function () {
  const boxIcons = document.querySelector(".box-icons");
  const indicator = document.querySelector(".indicator");
  const words = document.querySelectorAll(".box-words");
  const codeBox = document.querySelector(".box-code");

  const codeSnippets = {
    "Node.js": `    <p>1 <span style="padding-left: 15px;"> import { <span style="color: white;">Resend</span> } from 'resend';</span></p>
    <p>2 </p>
    <p>3 <span style="padding-left: 15px;"> const <span style="color: white;">resend </span> = new <span style="color: white;">Resend('re_xxxxxxxxx');</span></span></p>
    <p>4 </p>
    <p>5 <span style="padding-left: 15px;">(async function() { </span></p>
    <p>6 <span style="padding-left: 15px;">const { <span style="color: white;">data, error</span> } = await <span style="color: white;">resend.emails.send</span>({</span></p>
    <p>7 <span style="padding-left: 15px;">from: 'onboarding@resend.dev',</span></p>
    <p>8 <span style="padding-left: 15px;">to: 'delivered@resend.dev',</span></p>
    <p>9 <span style="padding-left: 15px;">subject: 'Hello World',</span></p>
    <p>10 <span style="padding-left: 15px;">html: '<strong>it works!</strong>'</span></p>
    <p>11 <span style="padding-left: 15px;">});</p>
    <p>12 <span style="padding-left: 15px;">if (error) {</p>
    <p>13 <span style="padding-left: 15px;">return console.log(error);</span></p>
    <p>14 <span style="padding-left: 15px;">}</span></p>
    <p>15 <span style="padding-left: 15px;"></span></p>
    <p>16 <span style="padding-left: 15px;">console.log(data);</span></p>
    <p>17 <span style="padding-left: 15px;">})();</span></p>`,
    "Next.js": `    <p>1 <span style="padding-left: 15px;">import { <span style="color: white;">EmailTemplate</span> } from '@/components/email-template';</span></p>
    <p>2 <span style="padding-left: 15px;">import { <span style="color: white;">Resend</span> } from 'resend';</span></p>
    <p>3 </p>
    <p>4 <span style="padding-left: 15px;">const resend = new Resend(process.env.RESEND_API_KEY);</span></p>
    <p>5 </p>
    <p>6 <span style="padding-left: 15px;">export async function POST() {</span></p>
    <p>7 <span style="padding-left: 15px;">const { <span style="color: white;">data, error</span> } = await resend.emails.send({</span></p>
    <p>8 <span style="padding-left: 15px;">from: 'onboarding@resend.dev',</span></p>
    <p>9 <span style="padding-left: 15px;">to: 'delivered@resend.dev',</span></p>
    <p>10 <span style="padding-left: 15px;">subject: 'Hello world',</span></p>
    <p>11 <span style="padding-left: 15px;">react: EmailTemplate({ firstName: 'John' }),</span></p>
    <p>12 <span style="padding-left: 15px;">});</span></p>
    <p>13 </p>
    <p>14 <span style="padding-left: 15px;">if (error) {</span></p>
    <p>15 <span style="padding-left: 15px;">return Response.json({ error });</span></p>
    <p>16 <span style="padding-left: 15px;">}</span></p>
    <p>17 </p>
    <p>18 <span style="padding-left: 15px;">return Response.json(data);</span></p>
    <p>19 <span style="padding-left: 15px;">}</span></p>`,
    Remix: `    <p>1 <span style="padding-left: 15px;">import { <span style="color: white;">json</span> } from '@remix-run/node';</span></p>
    <p>2 <span style="padding-left: 15px;">import { <span style="color: white;">Resend</span> } from 'resend';</span></p>
    <p>3 </p>
    <p>4 <span style="padding-left: 15px;">const resend = new Resend('re_xxxxxxxxx');</span></p>
    <p>5 </p>
    <p>6 <span style="padding-left: 15px;">export const loader = async () => {</span></p>
    <p>7 <span style="padding-left: 15px;">const { <span style="color: white;">data, error</span> } = await resend.emails.send({</span></p>
    <p>8 <span style="padding-left: 15px;">from: 'onboarding@resend.dev',</span></p>
    <p>9 <span style="padding-left: 15px;">to: 'delivered@resend.dev',</span></p>
    <p>10 <span style="padding-left: 15px;">subject: 'Hello World',</span></p>
    <p>11 <span style="padding-left: 15px;">html: '<strong>it works!</strong>',</span></p>
    <p>12 <span style="padding-left: 15px;">});</span></p>
    <p>13 </p>
    <p>14 <span style="padding-left: 15px;">if (error) {</span></p>
    <p>15 <span style="padding-left: 15px;">return json(error, 400);</span></p>
    <p>16 <span style="padding-left: 15px;">}</span></p>
    <p>17 </p>
    <p>18 <span style="padding-left: 15px;">return json(data, 200);</span></p>
    <p>19 <span style="padding-left: 15px;">};</span></p>`,
    Nuxt: `    <p>1 <span style="padding-left: 15px;">import { <span style="color: white;">Resend</span> } from 'resend';</span></p>
    <p>2 </p>
    <p>3 <span style="padding-left: 15px;">const resend = new Resend('re_xxxxxxxxx');</span></p>
    <p>4 </p>
    <p>5 <span style="padding-left: 15px;">export default defineEventHandler(async () => {</span></p>
    <p>6 <span style="padding-left: 15px;">const { <span style="color: white;">data, error</span> } = await resend.emails.send({</span></p>
    <p>7 <span style="padding-left: 15px;">from: 'onboarding@resend.dev',</span></p>
    <p>8 <span style="padding-left: 15px;">to: 'delivered@resend.dev',</span></p>
    <p>9 <span style="padding-left: 15px;">subject: 'Hello World',</span></p>
    <p>10 <span style="padding-left: 15px;">html: '<strong>it works!</strong>',</span></p>
    <p>11 <span style="padding-left: 15px;">});</span></p>
    <p>12 </p>
    <p>13 <span style="padding-left: 15px;">if (error) {</span></p>
    <p>14 <span style="padding-left: 15px;">return error;</span></p>
    <p>15 <span style="padding-left: 15px;">}</span></p>
    <p>16 </p>
    <p>17 <span style="padding-left: 15px;">return data;</span></p>
    <p>18 <span style="padding-left: 15px;">});</span></p>`,
    Express: `    <p>1 <span style="padding-left: 15px;">import { <span style="color: white;">Resend</span> } from 'resend';</span></p>
    <p>2 <span style="padding-left: 15px;">import express, { Request, Response } from 'express';</span></p>
    <p>3 </p>
    <p>4 <span style="padding-left: 15px;">const resend = new Resend('re_xxxxxxxxx');</span></p>
    <p>5 <span style="padding-left: 15px;">const app = express();</span></p>
    <p>6 </p>
    <p>7 <span style="padding-left: 15px;">app.get('/', async (req: Request, res: Response) => {</span></p>
    <p>8 <span style="padding-left: 15px;">const { <span style="color: white;">data, error</span> } = await resend.emails.send({</span></p>
    <p>9 <span style="padding-left: 15px;">from: 'onboarding@resend.dev',</span></p>
    <p>10 <span style="padding-left: 15px;">to: 'delivered@resend.dev',</span></p>
    <p>11 <span style="padding-left: 15px;">subject: 'Hello World',</span></p>
    <p>12 <span style="padding-left: 15px;">html: '<strong>it works!</strong>',</span></p>
    <p>13 <span style="padding-left: 15px;">});</span></p>
    <p>14 </p>
    <p>15 <span style="padding-left: 15px;">if (error) {</span></p>
    <p>16 <span style="padding-left: 15px;">return res.status(400).json(error);</span></p>
    <p>17 <span style="padding-left: 15px;">}</span></p>
    <p>18 </p>
    <p>19 <span style="padding-left: 15px;">return res.status(200).json(data);</span></p>
    <p>20 <span style="padding-left: 15px;">});</span></p>`,
    Hono: `    <p>1 <span style="padding-left: 15px;">import { <span style="color: white;">Hono</span> } from 'hono';</span></p>
    <p>2 <span style="padding-left: 15px;">import { <span style="color: white;">Resend</span> } from 'resend';</span></p>
    <p>3 <span style="padding-left: 15px;">import { EmailTemplate } from './emails/email-template';</span></p>
    <p>4 </p>
    <p>5 <span style="padding-left: 15px;">const app = new Hono();</span></p>
    <p>6 <span style="padding-left: 15px;">const resend = new Resend('re_xxxxxxxxx');</span></p>
    <p>7 </p>
    <p>8 <span style="padding-left: 15px;">app.get('/', async (c) => {</span></p>
    <p>9 <span style="padding-left: 15px;">const { <span style="color: white;">data, error</span> } = await resend.emails.send({</span></p>
    <p>10 <span style="padding-left: 15px;">from: 'onboarding@resend.dev',</span></p>
    <p>11 <span style="padding-left: 15px;">to: ['delivered@resend.dev'],</span></p>
    <p>12 <span style="padding-left: 15px;">subject: 'Hello World',</span></p>
    <p>13 <span style="padding-left: 15px;">react: <EmailTemplate firstName="John" />,</span></p>
    <p>14 <span style="padding-left: 15px;">});</span></p>
    <p>15 </p>
    <p>16 <span style="padding-left: 15px;">if (error) {</span></p>
    <p>17 <span style="padding-left: 15px;">return c.json(error, 400);</span></p>
    <p>18 <span style="padding-left: 15px;">}</span></p>
    <p>19 </p>
    <p>20 <span style="padding-left: 15px;">return c.json(data);</span></p>
    <p>21 <span style="padding-left: 15px;">});</span></p>
    <p>22 </p>
    <p>23 <span style="padding-left: 15px;">export default app;</span></p>`,
  };

  // Set initial position of indicator and code
  const firstWord = words[0];
  indicator.style.width = `${firstWord.offsetWidth}px`;
  indicator.style.left = `${firstWord.offsetLeft}px`;

  words.forEach((word) => {
    word.addEventListener("click", () => {
      // Remove active class from all words
      words.forEach((w) => w.classList.remove("active"));

      // Add active class to clicked word
      word.classList.add("active");

      // Move indicator
      indicator.style.width = `${word.offsetWidth}px`;
      indicator.style.left = `${word.offsetLeft}px`;

      // Update code
      const framework = word.textContent.replace(/^[^A-Za-z]+/, "").trim();
      if (codeSnippets[framework]) {
        codeBox.innerHTML = codeSnippets[framework];
      }
    });
  });
});
