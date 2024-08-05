const db = require('../db/dbConfig')

const getAllServices = async () => {
    try {
        const allServices = await db.any("SELECT * FROM services")
        return allServices
    } catch (error) {
        return error
    }
} 

const getOneService = async (id) => {
    try {
        const oneService = await db.one("SELECT * FROM services WHERE id=$1", id)
        return oneService
    } catch (error) {
        return error
    }
}

const addService = async (service) => { 
    try {
    const newService = await db.one("INSERT INTO services (id, name, description, price, duration_minutes,category,is_popular) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *", [service.id, service.name, service.description, service.price, service.duration_minutes, service.category, service.is_popular])

    return newService

    } catch (error) {
        return error
    }
}

const deleteService = async (id) => {
    try {
        const deletedService = await db.one("DELETE FROM services WHERE id=$1 RETURNING *", id)
        return deletedService
    } catch (error) {
        return error
    }
}

const updateService = async (id, service) => {
  try{
    const updatedService = await db.one("UPDATE services SET name = $1, description = $2, price = $3,duration_minutes = $4,category = $5,is_popular = $6 WHERE id = $7 RETURNING *", [service.name, service.description, service.price, service.duration_minutes, service.category, service.is_popular, id])

    return updatedService

  } catch(error){
    return error
  }
}

module.exports = { getAllServices, getOneService, addService, deleteService, updateService }