import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Nav from '../components/nav/nav'

export default component$(() => {
    return (
        <div className="main-view-container">
            <div className="main-view">
                <div>
                    <Nav />
                </div>
                <h1>Jesper</h1>
            </div>
        </div>
    )
})

export const head: DocumentHead = {
    title: 'Jesper Pettersson',
}
