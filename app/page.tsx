import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart3, ChevronRight, Database, LineChart, PieChart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SignInButton } from "@clerk/nextjs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-teal-600">
            <Database className="h-6 w-6" />
            <span>FinanceFlow</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Product
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Solutions
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Integrations
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Customers
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Resources
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <SignInButton redirectUrl="/dashboard" signInUrl="/sign-in">
              <Button variant="ghost" className="text-sm font-medium hover:underline underline-offset-4">
                Login
              </Button>
            </SignInButton>
            <Button className="bg-teal-600 hover:bg-teal-700">Request a demo</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                <Link href="#" className="flex items-center gap-1">
                  Download our guide <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-teal-800 max-w-3xl">
                Automated financial insights for your business
              </h1>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                Transform your financial data into actionable insights with seamless integration to MYOB, Xero, and
                QuickBooks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button className="bg-teal-600 hover:bg-teal-700 h-12 px-8 text-base">Get started</Button>
                <Button
                  variant="outline"
                  className="h-12 px-8 text-base border-teal-600 text-teal-600 hover:bg-teal-50"
                >
                  <span>Watch demo</span>
                </Button>
              </div>
            </div>
            <div className="mx-auto max-w-5xl rounded-lg border bg-white shadow-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                width={1200}
                height={600}
                alt="Dashboard preview"
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                  Trusted by businesses worldwide
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800">
                  Seamless integration with your accounting software
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connect your existing accounting systems and unlock powerful financial insights in minutes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                <div className="p-3 rounded-full bg-teal-100">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    width={80}
                    height={80}
                    alt="MYOB logo"
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold">MYOB Integration</h3>
                <p className="text-gray-600 text-center">
                  Seamlessly connect with MYOB for real-time financial data access.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                <div className="p-3 rounded-full bg-teal-100">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    width={80}
                    height={80}
                    alt="Xero logo"
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold">Xero Integration</h3>
                <p className="text-gray-600 text-center">
                  Automatically sync your Xero accounts for comprehensive reporting.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                <div className="p-3 rounded-full bg-teal-100">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    width={80}
                    height={80}
                    alt="QuickBooks logo"
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold">QuickBooks Integration</h3>
                <p className="text-gray-600 text-center">
                  Connect QuickBooks to transform your financial data into insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800">
                  Powerful financial reporting at your fingertips
                </h2>
                <p className="text-gray-600 md:text-xl">
                  Our platform transforms complex financial data into clear, actionable insights that help you make
                  better business decisions.
                </p>
                <ul className="grid gap-4">
                  <li className="flex items-start gap-2">
                    <BarChart3 className="h-6 w-6 text-teal-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Automated Reports</h3>
                      <p className="text-gray-600">Generate comprehensive financial reports with a single click.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <LineChart className="h-6 w-6 text-teal-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Real-time Dashboards</h3>
                      <p className="text-gray-600">
                        Monitor key financial metrics in real-time with customizable dashboards.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <PieChart className="h-6 w-6 text-teal-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Predictive Analytics</h3>
                      <p className="text-gray-600">Forecast future financial performance with AI-powered analytics.</p>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button className="bg-teal-600 hover:bg-teal-700">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="mx-auto max-w-md overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  width={800}
                  height={600}
                  alt="Dashboard features"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800">
                  What our customers say
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Trusted by businesses of all sizes to simplify financial reporting and analysis.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-white shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-gray-100 p-1">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Customer"
                      className="rounded-full h-12 w-12"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Sarah Johnson</h3>
                    <p className="text-sm text-gray-600">CFO, TechStart Inc.</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "FinanceFlow has transformed how we handle financial reporting. The automated dashboards save us hours
                  each week and provide insights we never had before."
                </p>
              </div>
              <div className="flex flex-col space-y-4 border rounded-lg p-6 bg-white shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-gray-100 p-1">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Customer"
                      className="rounded-full h-12 w-12"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Michael Chen</h3>
                    <p className="text-sm text-gray-600">Owner, Chen Consulting</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The integration with Xero was seamless. Now I can generate professional financial reports in seconds
                  instead of spending days in spreadsheets."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-teal-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800">
                  Ready to transform your financial reporting?
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get started today and see the difference automated financial insights can make for your business.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button className="bg-teal-600 hover:bg-teal-700 h-12 px-8 text-base">Start your free trial</Button>
                <Button
                  variant="outline"
                  className="h-12 px-8 text-base border-teal-600 text-teal-600 hover:bg-teal-100"
                >
                  Schedule a demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-teal-600">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-teal-600">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-teal-600">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-teal-600">
                    Updates
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-teal-600">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-teal-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-teal-600">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-teal-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-teal-600">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-teal-600">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-teal-600">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-teal-600">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-teal-600">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-teal-600">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-teal-600">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t">
            <div className="flex items-center gap-2 font-bold text-xl text-teal-600">
              <Database className="h-6 w-6" />
              <span>FinanceFlow</span>
            </div>
            <p className="text-sm text-gray-600 mt-4 md:mt-0">
              © {new Date().getFullYear()} FinanceFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
