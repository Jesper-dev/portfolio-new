import { component$, Slot } from '@builder.io/qwik'
import Nav from '~/components/nav/nav'

export default component$(() => {
    return (
        <>
            <main>
                <section>
                    <div className="main-view-container">
                        <div className="main-view">
                            <Nav />
                            <Slot />
                        </div>
                    </div>
                </section>
            </main>
            <footer>Made by Jesper Pettersson</footer>
        </>
    )
})
