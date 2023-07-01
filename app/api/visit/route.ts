import { NextRequest, NextResponse } from "next/server"
import VisitModel from '@/lib/database/visit'
import { ApplicationError } from "@/lib/errorHandler"


export async function GET(request: NextRequest) {
    return getData(request)
}

export async function POST(request: NextRequest) {
    return createData(request)
}


const getData = async (req: NextRequest) => {
    try {
        // const TokenModel = mongoose.model('TokenModel', tokenSchema);
        let response = { code: 400, message: 'Failed get data', data: null as any }

        const data = await VisitModel.find()

        console.log(data.length)

        response.code = 200
        response.message = 'Success get data'
        response.data = data

        return NextResponse.json(
            response,
            { status: response.code ? response.code : 200 }
        )
    } catch (error: any) {
        console.log(error)
        return ApplicationError(error.message)
    }
}


const createData = async (req: NextRequest) => {
    try {
        let response = { code: 400, message: 'Failed create data', data: null as any }

        const reqBody = await req.json()

        const data = await VisitModel.create(reqBody)

        if (data) {
            response.code = 0
            response.message = 'Success insert data'
            response.data = data
        }

        return NextResponse.json(
            response,
            { status: response.code ? response.code : 200 }
        )
    } catch (error: any) {
        console.log(error)
        return ApplicationError(error.message)
    }
}