import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styles from './nav.less?inline'

export default component$(() => {
    useStylesScoped$(styles)

    return (
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">projects</a>
        </nav>
    )
})
