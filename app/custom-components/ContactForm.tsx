"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import Button from './Button'

const formSchema = z.object({
    fName: z.string().min(5, "Please enter a valid fist name "),
    lName: z.string().min(5, "Please enter a valid last name"),
    email: z.string().min(5, "Please enter a valid email address"),
    state: z.string().min(5, "Please enter a valid state/city "),
    phone: z.number().min(11, "Phone number is invalid")
})


const ContactForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            fName: "",
            lName: "",
            email: "",
            state: "",
            phone: 2340000000000
        },
        resolver: zodResolver(formSchema)
    })

    type FormData = z.infer<typeof formSchema>
    const handleSubmit = (data: FormData) => {
        console.log(data);
        
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className='bg-white md:p-8 p-4 py-8 rounded-lg gap-6 w-[80%] flex flex-col'>
                <h3 className='text-2xl'>Get a free Personalized Quote</h3>
                <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
                    <div className="w-full">
                        <FormField
                            control={form.control}
                            name="fName"
                            render={({ field }) => (
                                <FormItem className="w-full flex flex-col">
                                    <FormLabel htmlFor={"first name"}>Firstname</FormLabel>
                                    <input
                                        type="text"
                                        placeholder="Firstname"
                                        className='p-4 border border-gray-400 rounded-lg my-4'
                                        {...field}
                                    />
                                </FormItem>
                            )}
                        />
                        <FormMessage />
                    </div>
                    <div className="w-full">
                        <FormField
                            control={form.control}
                            name="lName"
                            render={({ field }) => (
                                <FormItem className="w-full flex flex-col">
                                    <FormLabel htmlFor={"last name"}>Last name</FormLabel>
                                    <input
                                        type="text"
                                        placeholder="Last name"
                                        className='p-4 border border-gray-400 rounded-lg my-4'
                                        {...field}
                                    />
                                </FormItem>
                            )}
                        />
                        <FormMessage />
                    </div>
                </div>
                <div className="w-full">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="w-full flex flex-col">
                                <FormLabel htmlFor={"email"}>Email address</FormLabel>
                                <input
                                    type="text"
                                    placeholder="Enter valid email address"
                                    className='p-4 border border-gray-400 rounded-lg my-4'
                                    {...field}
                                />
                            </FormItem>
                        )}
                    />
                    <FormMessage />
                </div>
                <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
                    <div className="w-full">
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="w-full flex flex-col">
                                    <FormLabel htmlFor={"phone"}>Phone number</FormLabel>
                                    <input
                                        type="number"
                                        placeholder="0000 000 000"
                                        className='p-4 border border-gray-400 rounded-lg my-4'
                                        {...field}
                                    />
                                </FormItem>
                            )}
                        />
                        <FormMessage />
                    </div>
                    <div className="w-full">
                        <FormField
                            control={form.control}
                            name="state"
                            render={({ field }) => (
                                <FormItem className="w-full flex flex-col">
                                    <FormLabel htmlFor={"first name"}>State/City</FormLabel>
                                    <input
                                        type="text"
                                        placeholder="Enter address"
                                        className='p-4 border border-gray-400 rounded-lg my-4'
                                        {...field}
                                    />
                                </FormItem>
                            )}
                        />
                        <FormMessage />
                    </div>
                </div>
                <p className="text-[12px] text-gray-400">
                    By clicking below, I authorize Blue Camel Energy to call me and send marketing  to me about Blue Camel products and services at the telephone number and email I entered above, using an auto dialer, even if I am on a national or state “Do Not Call” list. Message and data rates may apply. Consent for calls & texts is optional. You can opt out anytime. You also agree to our <span className='underline font-semibold'>Terms of Service.</span>
                </p>
                <Button variant="main" className='text-white self-center bg-scheme w-max'>
                        Get Quote
                </Button>
            </form>
        </Form>
    )
}

export default ContactForm
