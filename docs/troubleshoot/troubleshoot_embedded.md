# Troubleshoot - Embedded

## I can't build the binary - build error
Make sure the complete toolchain is well setup. If you keep having problems, please refer to XXX to verify that your setup is OK.

## The binary doesn't run properly
Please roll back to an official release version in the repository (marked with a tag). From here on, check commit per commit whether or not the binary runs as expected.
Note that not respecting the threading rules (see XXX) in the userthread might cause unexpected behaviour.

<!-- ## I can't build the binary - compilation error

## I can't flash the board
Windows vs Linux -->