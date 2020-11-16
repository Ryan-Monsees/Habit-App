using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class E_Shoot : Emb_Move
{

    public Transform projectileSpawn;

    public GameObject projectile;



    public float nextFire = 1.0f;
    public float currentTime = 0.0f;




    private void Awake()
    {

        projectileSpawn = this.gameObject.transform;
        enabled = false;





    }

    // Update is called once per frame
    void Update()
    {
        shoot();
    }

    public void shoot()
    {
        currentTime += Time.deltaTime;

        // Checks if on cooldown
        if (currentTime > nextFire)
        {


            // Shoots object
            Instantiate(projectile, projectileSpawn.position, Quaternion.identity);

            // Starts cooldown
            currentTime = 0.0f;
        }
    }
}
