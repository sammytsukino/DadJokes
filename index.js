import axios, {isCancel, AxiosError} from 'axios';
import cowsay from "cowsay";
import chalk from "chalk";


async function getJoke() {
    const response = await axios.get('https://icanhazdadjoke.com/', {headers: {Accept : 'application/json'}
});
    return response.data.joke
};

async function cowsays() {
  const joke = await getJoke();
  const meme = cowsay.say({
    text: joke,
    e: "^^",
    T: "U "
  });
  console.log(chalk.magenta(meme));
}


cowsays();
