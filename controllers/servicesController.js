const express = require('express')
const services = express.Router()

const { getAllServices, getOneService, addService, updateService, deleteService } = require('../queries/services')

const { checkName,checkPrice,checkDuration} = require('../validations/checkServices')


services.get('/', async (req, res) => {
    const services = await getAllServices()
    if (services[0]) {
        res.status(200).json(services)
    } else {
        res.status(500).json({ error: "Internal Server Error" })
    }
    
});


services.get('/:id', async (req, res) => {
    const { id } = req.params
    const service = await getOneService(id)
    if (service.id) {
        res.status(200).json(service)
    } else {
        res.status(404).json({ error: "Service not found" })
    }
});


services.post('/',  checkName, checkPrice, checkDuration, async (req, res) => { 
    const service = await addService(req.body)
    res.json(service)
});


services.put('/:id', checkName, checkPrice, checkDuration, async (req, res) => {
    const { id } = req.params
    const updatedService = await updateService(id, req.body)
    res.status(200).json(updatedService)
});


services.delete('/:id', async (req, res) => {
    const { id } = req.params
    const deletedService = await deleteService(id)
    if (deletedService.id) {
        res.status(200).json(deletedService)
    } else {
        res.status(404).json({ error: "Service not found" })
    }
});


module.exports = services