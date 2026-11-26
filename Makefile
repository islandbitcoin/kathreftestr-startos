ARCHES := x86 arm
# overrides to s9pk.mk must precede the include statement
include s9pk.mk

# Repack when application inputs change, including a new submodule revision.
$(BASE_NAME).s9pk $(BASE_NAME)_%.s9pk: Dockerfile $(wildcard patches/*.patch) upstream-project/lib/mirror.ts
