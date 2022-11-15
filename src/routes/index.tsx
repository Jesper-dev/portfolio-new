import { component$, useStylesScoped$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import globalStyles from './home.less'
import profilePic from '../pictures/jesper_profil_fixad.jpeg'

export default component$(() => {
    useStylesScoped$(globalStyles)

    return (
        <div className="home-wrapper">
            <h1>Hello!</h1>
            <div className="text-wrapper">
                My name is <span className="name-span">Jesper Pettersson</span>{' '}
                and I'm a Front-End Developer! I love coding and learn new
                things at the same time. I've been a front-end dev for about 2
                years and counting and it's the best choice I've made in my
                life.
            </div>
            <img className="profile-pic" src={profilePic} />
        </div>
    )
})

export const head: DocumentHead = {
    title: 'Jesper Pettersson | home',
}
