import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <div className="py-3">
          <div className="flex justify-center p-3">
            <Logo className="size-14"/>
          </div>
          <CardTitle className="text-center font-bold text-2xl">تطبيق كتابك</CardTitle>
          </div>
          <CardDescription className="text-black/80">
            أدخل الإيميل و كلمة المرور للدخول إلى حسابك
          </CardDescription>
          {/* <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction> */}
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">الإيميل</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex justify-between">
                  <Label htmlFor="password">كلمة المرور</Label>
                  <a
                    href="#"
                    className="hover:underline text-primary"
                  >
                    نسيت كلمة المرور
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            تسجيل الدخول
          </Button> 
        </CardFooter>
      </Card>
    </div>
  )
}
