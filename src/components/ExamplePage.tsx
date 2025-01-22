import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export function ExamplePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to My App</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Get Started</CardTitle>
          <CardDescription>Fill out the form below to begin</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium leading-none">
                Name
              </label>
              <Input id="name" placeholder="Enter your name" className="mt-1.5" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium leading-none">
                Email
              </label>
              <Input id="email" type="email" placeholder="Enter your email" className="mt-1.5" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Submit</Button>
        </CardFooter>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Feature One</CardTitle>
            <CardDescription>Description of the first feature</CardDescription>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feature Two</CardTitle>
            <CardDescription>Description of the second feature</CardDescription>
          </CardHeader>
          <CardContent>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </CardContent>
        </Card>
      </div>
    </div>
  )
}