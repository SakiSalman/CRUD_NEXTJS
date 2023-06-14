

import mongoConnect from '@/config/db'
import Todo from '@/models/todo'
import { NextResponse } from 'next/server'
import React from 'react'

// get all todo
export const GET = async () => {
    try {
    await mongoConnect()
    const todo = await Todo.find()
    return NextResponse.json({todo})
    } catch (error) {
        
    return NextResponse.json(error.message)
    }
}

