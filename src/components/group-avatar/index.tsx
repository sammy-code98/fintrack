import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export default function GroupAvatar() {
  return (
    <div className="mt-2 flex items-center gap-2">
      <div className="flex -space-x-2">
        <Avatar className="h-10 w-10 border-2 border-background">
          <AvatarImage src="https://github.com/leerob.png" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar className="h-10 w-10 border-2 border-background">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>L</AvatarFallback>
        </Avatar>
        <Avatar className="h-10 w-10 border-2 border-background">
          <AvatarImage src="https://github.com/evilrabbit.png" />
          <AvatarFallback>N</AvatarFallback>
        </Avatar>
        <Avatar className="h-10 w-10 border-2 border-background">
          <AvatarImage src="https://github.com/sammy-code98.png" />
          <AvatarFallback>T</AvatarFallback>
        </Avatar>
      </div>
      <span className="text-sm text-muted-foreground">Ava, Liam, Noah +12 others</span>
    </div>
  )
}
