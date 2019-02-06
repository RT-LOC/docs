# Troubleshoot - Embedded

## Cannot build the binary - build error
Make sure the complete toolchain is well setup. If you keep having problems, please refer to XXX to verify that your setup is OK.

## Cannot build the binary - compilation error

## Cannot flash the board
Windows vs Linux

## The binary doesn't run properly
Please roll back to an official release version in the repository (marked with a tag). From here on, check commit per commit whether or not the binary runs as expected.
Note that not respecting the threading rules (see XXX) in the userthread might cause unexpected behaviour.

## The GIT repository seems down
Try to log in via http://git2.callitrix.com.
If this website is down, it is very likely the whole server is down. Please contact info@callitrix.com.
