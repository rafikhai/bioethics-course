async function includeComponents() {

    const components = document.querySelectorAll("[data-include]");

    for (const component of components) {

        const folder = component.getAttribute("data-include");

        const path = `${folder}/index.html`;

        try {

            const response = await fetch(path);

            const html = await response.text();

            component.innerHTML = html;

        } catch (error) {

            console.error("Failed loading:", path);

        }
    }
}

document.addEventListener("DOMContentLoaded", includeComponents);