import mongoose from 'mongoose'
import mongodb from '.'

export const visit = new mongoose.Schema({
    visit_time: {
        type: Date,
        default: new Date()
    },
    device: {
        type: String,
    },
    browser: {
        type: String,
    },
    ip: {
        type: String,
    },
    district: {
        type: String,
    },
    city: {
        type: String,
    },
    region: {
        type: String,
    },
    country_name: {
        type: String,
    },
    country_code: {
        type: String,
    },
    isp: {
        type: String,
    },
    asn: {
        type: String,
    },
    latitude: {
        type: String,
    },
    longitude: {
        type: String,
    }
})


// const VisitModel = mongodb.model("VisitModel", visit, 'c_visit')
// export default VisitModel

export default mongodb.models.VisitModel || mongodb.model('VisitModel', visit, 'c_visit');