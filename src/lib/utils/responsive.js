import {writable, derived} from 'svelte/store';
import {browser} from '$app/environment';

export const width = writable(0);
export const mobile = writable(true);

export const device = derived([width, mobile], ([width, mobile]) => {
    if (width > 1000 || (!browser && !mobile)) {
        return 'desktop'
    } else if (width > 420) {
        return 'tablet'
    } else {
        return 'mobile'
    }
})