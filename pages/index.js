import styled from 'styled-components'
import mainTheme from '../src/themes/mainTheme.json'

import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Widget from '../src/components/Widget';

export default function Home() {
  return (
    <QuizBackground backgroundImage={mainTheme.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{mainTheme.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{mainTheme.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>Lorem iosum</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  )
}
