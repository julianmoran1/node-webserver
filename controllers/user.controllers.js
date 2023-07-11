import { request, response } from "express"
//ayuda a tener el autocomplete de response

export const getUsuarios = (req = request, res = response) => {
    const query = req.query

    req.body
    res.json({
        msg: "Creado correctamente",
        query
    })
}

export const postUsuarios = (req, res = response) => {

    const { nombre, edad } = req.body
    res.json({
        msg: "Creado correctamente",
        nombre,
        edad
    })
}

export const putUsuarios = (req, res = response) => {
    const id = req.params.id
    res.json({
        msg: "Editado correctamente",
        id
    })
}

export const deleteUsuarios = (req, res = response) => {
    res.json({ msg: "Borrado correctamente" })
}